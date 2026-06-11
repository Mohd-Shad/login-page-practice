pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.54.0-noble'
        }
    }

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm ci || npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
    }
}

// pipeline {
//     agent any

//     stages {

//         stage('Install Dependencies') {
//             steps {
//                 sh 'npm install'
//             }
//         }

//         stage('Install Playwright Browsers') {
//             steps {
//                 sh 'npx playwright install'
//             }
//         }

//         stage('Run Tests') {
//             steps {
//                 sh 'npx playwright test'
//             }
//         }
//     }
// }

// pipeline {
//     agent any

//     stages {
//         stage('Check Environment') {
//             steps {
//                 script {
//                     echo "Node Name: ${env.NODE_NAME}"

//                     if (isUnix()) {
//                         echo "Running on Linux/Unix agent"
//                     } else {
//                         echo "Running on Windows agent"
//                     }
//                 }
//             }
//         }
//     }
// }

// pipeline {
//     agent any

//     stages {

//         stage('Install Dependencies') {
//             steps {
//                 bat 'npm install'
//             }
//         }

//         stage('Install Playwright Browsers') {
//             steps {
//                 bat 'npx playwright install'
//             }
//         }

//         stage('Run Tests') {
//             steps {
//                 bat 'npx playwright test'
//             }
//         }
//     }
// }