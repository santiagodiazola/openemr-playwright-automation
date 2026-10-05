pipeline {
    agent any

    options {
        timeout(time: 20, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }

    environment {
        // Points Playwright tests to the local Dockerized OpenEMR instance
        BASE_URL = 'http://localhost:8300/'
    }

    stages {
        stage('Spin Up OpenEMR Environment') {
            steps {
                echo 'Starting MariaDB and OpenEMR containers...'
                sh 'docker-compose up -d'
                echo 'Waiting for services to initialize...'
                sh 'sleep 30'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies inside Playwright Docker container...'
                sh 'docker run --rm -v $PWD:/app -w /app mcr.microsoft.com/playwright:v1.40.0-focal npm ci'
            }
        }

        stage('Execute Playwright Tests') {
            steps {
                echo 'Running Playwright test suite against local OpenEMR...'
                sh 'docker run --rm --network host -e BASE_URL=${BASE_URL} -v $PWD:/app -w /app mcr.microsoft.com/playwright:v1.40.0-focal npx playwright test'
            }
        }
    }

    post {
        always {
            echo 'Archiving HTML test reports...'
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true

            echo 'Tearing down Docker containers...'
            sh 'docker-compose down -v'
        }
    }
}
