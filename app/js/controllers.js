'use strict';

function PromptCtrl($scope) {
    $scope.appName = 'Prompt Generator';
    $scope.appVersion = '0.1';
    $scope.appDescription = 'Easily generate the prompt for your terminal';
    $scope.author = 'aesptux';


    $scope.colors = {
        black: '\\[\\033[0;30m\\]',
        blackBold: '\\[\\033[1;30m\\]',
        red: '\\[\\033[0;31m\\]',
        redBold: '\\[\\033[1;31m\\]',
        green: '\\[\\033[0;32m\\]',
        greenBold: '\\[\\033[1;32m\\]',
        yellow: '\\[\\033[0;33m\\]',
        yellowBold: '\\[\\033[1;33m\\]',
        blue: '\\[\\033[0;34m\\]',
        blueBold: '\\[\\033[1;34m\\]',
        purple: '\\[\\033[0;35m\\]',
        purpleBold: '\\[\\033[1;35m\\]',
        cyan: '\\[\\033[0;36m\\]',
        cyanBold: '\\[\\033[1;36m\\]',
        white: '\\[\\033[0;37m\\]',
        whiteBold: '\\[\\033[1;37m\\]'
    };

    $scope.variables = {
        rootIdentifier: ['\\$', 'Root Identifier ($ or #)', '#'],
        username: ['\\u', 'Username', 'aesptux'],
        fullHostname: ['\\H', 'Full Hostname (host.example.com)', 'edenprime.exodus.com'],
        shortHostname: ['\\h', 'Short Hostname (host)', 'edenprime'],
        fullWorkingDir: ['\\w', 'Full Working Directory (/home/user/Documents)', '/etc/nginx'],
        basenameWorkingDir: ['\\W', 'Basename Working Dir (Documents)', 'nginx'],
        time24: ['\\t', 'Time 24h', '18:00:00'],
        time12: ['\\T', 'Time 12', '06:00:00'],
        newLine: ['\\n', 'New Line', '']
    };

    $scope.restorePrompt = '\\[\\e[0m\\]';

    $scope.prompt = [];
    $scope.form = {};

    $scope.addElement = function () {
        $scope.prompt.push($scope.form);
        $scope.form = angular.copy({});
    };

    $scope.removeElement = function () {
        $scope.prompt.pop();
    };

}