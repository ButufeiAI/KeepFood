<?php
declare(strict_types=1);

namespace App\Command;

use Cake\Command\Command;
use Cake\Console\Arguments;
use Cake\Console\ConsoleIo;

class GenerateSaltCommand extends Command
{
    public function execute(Arguments $args, ConsoleIo $io): int
    {
        $salt = bin2hex(random_bytes(32));

        $envPath = ROOT . DS . 'config' . DS . '.env';
        $envContents = '';
        if (file_exists($envPath)) {
            $envContents = file_get_contents($envPath);
            if ($envContents === false) {
                $io->err("Failed to read config/.env file.");
                return 1;
            }
        }

        $pattern = '/^.*SECURITY_SALT.*$/m';
        $replacement = "export SECURITY_SALT=\"{$salt}\"";
        if (preg_match($pattern, $envContents)) {
            $newEnvContents = preg_replace($pattern, $replacement, $envContents);
        } else {
            $newEnvContents = rtrim($envContents) . "\n{$replacement}\n";
        }

        if (file_put_contents($envPath, $newEnvContents) === false) {
            $io->err("Failed to write updated config/.env file.");
            return 1;
        }

        $io->success("SECURITY_SALT updated successfully in config/.env file!");
        return 0;
    }
}
