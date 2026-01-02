# DreamSPOS - Yii2 Template

<p align="center">
    <h1 align="center">DreamSPOS - Point of Sale System</h1>
    <p align="center">A modern, responsive, and feature-rich Point of Sale system built with Yii2 framework</p>
    <br>
</p>

[![Yii2](https://img.shields.io/badge/Powered_by-Yii_Framework-green.svg?style=flat)](https://www.yiiframework.com/)
[![PHP Version](https://img.shields.io/badge/PHP-7.4%2B-blue.svg)](https://php.net/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.md)

DreamSPOS is a comprehensive Point of Sale (POS) system designed for retail businesses. Built on the Yii2 PHP framework, it provides a robust, secure, and scalable solution for managing sales, inventory, customers, and business operations.

## ✨ Features

- **User Management**: Role-based access control with different permission levels
- **Inventory Management**: Track products, categories, and stock levels
- **Sales Processing**: Process sales, returns, and exchanges
- **Customer Management**: Maintain customer records and purchase history
- **Reporting**: Generate sales, inventory, and business performance reports
- **Responsive Design**: Works on desktop and mobile devices
- **Multi-currency Support**: Process transactions in multiple currencies
- **Tax Management**: Handle different tax rates and rules
- **Discount System**: Apply various types of discounts and promotions

## 🚀 Requirements

- PHP 7.4 or higher
- MySQL 5.7+ or MariaDB 10.2+
- Web server (Apache/Nginx)
- Composer (for dependency management)
- Node.js & NPM (for frontend assets)

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/dreamspos.git
cd dreamspos
```

### 2. Install Dependencies

Install PHP dependencies using Composer:

```bash
composer install
```

Install frontend dependencies using NPM:

```bash
npm install
npm run build
```

### 3. Configure the Database

1. Create a new MySQL database for DreamSPOS
2. Copy `config/db.php.example` to `config/db.php`
3. Update the database configuration in `config/db.php` with your database credentials

### 4. Run Migrations

Run the following command to apply database migrations:

```bash
php yii migrate
```

### 5. Initialize Application

Run the setup command to initialize the application:

```bash
php yii app/init
```

### 6. Set Up Web Server

#### Apache Configuration

Ensure your `.htaccess` file in the `web` directory has the following content:

```apache
RewriteEngine on
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . index.php
```

#### Nginx Configuration

```nginx
server {
    server_name dreamspos.local;
    root /path/to/dreamspos/web;

    location / {
        try_files $uri $uri/ /index.php?$args;
    }

    location ~ \.php$ {
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root/$fastcgi_script_name;
        fastcgi_pass 127.0.0.1:9000;
        try_files $uri =404;
    }
}
```

## 🏗️ Project Structure

```
dreamspos/
├── assets/              # Frontend assets and resources
├── commands/            # Console commands
├── config/              # Application configurations
│   ├── console.php      # Console application configuration
│   ├── db.php           # Database configuration
│   ├── params.php       # Application parameters
│   └── web.php          # Web application configuration
├── controllers/         # Controller classes
├── mail/                # Email templates
├── models/              # Model classes
├── runtime/             # Runtime files
├── tests/               # Test scripts
├── vendor/              # Composer dependencies
├── views/               # View files
│   └── layouts/         # Layout views
└── web/                 # Web accessible files
    ├── assets/          # Published assets
    ├── css/             # Compiled CSS
    ├── js/              # Frontend JavaScript
    └── index.php        # Entry script
```

## 🔧 Configuration

### Application Parameters

Edit `config/params.php` to configure application-specific parameters:

```php
return [
    'adminEmail' => 'admin@example.com',
    'supportEmail' => 'support@example.com',
    'user.passwordResetTokenExpire' => 3600,
    'appName' => 'DreamSPOS',
    'appVersion' => '1.0.0',
];
```

### URL Management

Configure your application URL in `config/web.php`:

```php
'request' => [
    'cookieValidationKey' => 'your-cookie-validation-key',
    'baseUrl' => '',  // Set to your base URL if not in root
],
'urlManager' => [
    'enablePrettyUrl' => true,
    'showScriptName' => false,
    'rules' => [
        // Your URL rules here
    ],
],
```

## 🚀 Getting Started

### Default Credentials

After installation, you can log in with the following default credentials:

- **Username**: admin@example.com
- **Password**: admin123

**Important**: Change the default password after your first login.

### Creating Your First User

To create a new admin user, run:

```bash
php yii user/create <email> <username> <password> [role=admin]
```

## 🛠️ Development

### Running Tests

To run the test suite:

```bash
# Unit tests
./vendor/bin/codecept run unit

# Functional tests
./vendor/bin/codecept run functional

# Acceptance tests
./vendor/bin/codecept run acceptance
```

### Code Style

This project follows PSR-2 coding standards and PSR-4 autoloading standards.

To check code style:

```bash
# Check code style
./vendor/bin/phpcs --standard=PSR2 controllers/ models/ commands/ tests/

# Automatically fix code style issues
./vendor/bin/phpcbf --standard=PSR2 controllers/ models/ commands/ tests/
```

## 🔒 Security

- Always keep your Yii framework and all dependencies up to date
- Never commit sensitive information like passwords or API keys to version control
- Use environment variables for sensitive configuration
- Regularly back up your database
- Keep your server software updated with the latest security patches

## 📄 License

DreamSPOS is open-source software licensed under the [MIT license](LICENSE.md).

    http://127.0.0.1:8000

**NOTES:** 
- Minimum required Docker engine version `17.04` for development (see [Performance tuning for volume mounts](https://docs.docker.com/docker-for-mac/osxfs-caching/))
- The default configuration uses a host-volume in your home directory `.docker-composer` for composer caches


CONFIGURATION
-------------

### Database

Edit the file `config/db.php` with real data, for example:

```php
return [
    'class' => 'yii\db\Connection',
    'dsn' => 'mysql:host=localhost;dbname=yii2basic',
    'username' => 'root',
    'password' => '1234',
    'charset' => 'utf8',
];
```

**NOTES:**
- Yii won't create the database for you, this has to be done manually before you can access it.
- Check and edit the other files in the `config/` directory to customize your application as required.
- Refer to the README in the `tests` directory for information specific to basic application tests.


TESTING
-------

Tests are located in `tests` directory. They are developed with [Codeception PHP Testing Framework](https://codeception.com/).
By default, there are 3 test suites:

- `unit`
- `functional`
- `acceptance`

Tests can be executed by running

```
vendor/bin/codecept run
```

The command above will execute unit and functional tests. Unit tests are testing the system components, while functional
tests are for testing user interaction. Acceptance tests are disabled by default as they require additional setup since
they perform testing in real browser. 


### Running  acceptance tests

To execute acceptance tests do the following:  

1. Rename `tests/acceptance.suite.yml.example` to `tests/acceptance.suite.yml` to enable suite configuration

2. Replace `codeception/base` package in `composer.json` with `codeception/codeception` to install full-featured
   version of Codeception

3. Update dependencies with Composer 

    ```
    composer update  
    ```

4. Download [Selenium Server](https://www.seleniumhq.org/download/) and launch it:

    ```
    java -jar ~/selenium-server-standalone-x.xx.x.jar
    ```

    In case of using Selenium Server 3.0 with Firefox browser since v48 or Google Chrome since v53 you must download [GeckoDriver](https://github.com/mozilla/geckodriver/releases) or [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/downloads) and launch Selenium with it:

    ```
    # for Firefox
    java -jar -Dwebdriver.gecko.driver=~/geckodriver ~/selenium-server-standalone-3.xx.x.jar
    
    # for Google Chrome
    java -jar -Dwebdriver.chrome.driver=~/chromedriver ~/selenium-server-standalone-3.xx.x.jar
    ``` 
    
    As an alternative way you can use already configured Docker container with older versions of Selenium and Firefox:
    
    ```
    docker run --net=host selenium/standalone-firefox:2.53.0
    ```

5. (Optional) Create `yii2basic_test` database and update it by applying migrations if you have them.

   ```
   tests/bin/yii migrate
   ```

   The database configuration can be found at `config/test_db.php`.


6. Start web server:

    ```
    tests/bin/yii serve
    ```

7. Now you can run all available tests

   ```
   # run all available tests
   vendor/bin/codecept run

   # run acceptance tests
   vendor/bin/codecept run acceptance

   # run only unit and functional tests
   vendor/bin/codecept run unit,functional
   ```

### Code coverage support

By default, code coverage is disabled in `codeception.yml` configuration file, you should uncomment needed rows to be able
to collect code coverage. You can run your tests and collect coverage with the following command:

```
#collect coverage for all tests
vendor/bin/codecept run --coverage --coverage-html --coverage-xml

#collect coverage only for unit tests
vendor/bin/codecept run unit --coverage --coverage-html --coverage-xml

#collect coverage for unit and functional tests
vendor/bin/codecept run functional,unit --coverage --coverage-html --coverage-xml
```

You can see code coverage output under the `tests/_output` directory.
