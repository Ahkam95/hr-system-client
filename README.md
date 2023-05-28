# Human Resource Management System
Cloud based Human Resource Management System

## Prerequisites
1. Node 16
2. aws-cli

## To run locally

1. Start the execution
```bash
npm install
npm start
```
2. Login as a Default Admin
```bash
UserName: hrms-admin@gmail.com
Password: zxcv
```

## To deploy the Client to AWS

1. Login to AWS via CLI
```bash
aws configure
```
pass the Security Credential of the AWS account

2. Deploy
```bash
npm run build
npm run sync
```