# twitter_clone_backend

This is a backend application similar to Twitter, built using Node.js and MongoDB with Mongoose, and using Amazon S3 for storing images and Passport for authentication.

## Installation

To install the dependencies, run the following command:

```
npm install 
```


## Configuration

This application requires the following environment variables to be set:

- `SECRET_KEY`: secret key for authentication
- `BUCKET_NAME`: name of the S3 bucket where images will be stored
- `AWS_ACCESS_KEY_ID`: AWS access key ID
- `AWS_SECRET_ACCESS_KEY`: AWS secret access key
- `AWS_REGION` : AWS region 

## Usage

To start the application, run the following command:

```
npm start
```

The application will be running at `http://localhost:3000`.
