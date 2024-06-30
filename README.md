### Hexlet tests and linter status:
[![Actions Status](https://github.com/mashaanov/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/mashaanov/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/3f9e50a51ce013d46bf5/maintainability)](https://codeclimate.com/github/mashaanov/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/3f9e50a51ce013d46bf5/test_coverage)](https://codeclimate.com/github/mashaanov/frontend-project-46/test_coverage) 

## Description

This is a CLI utility to determine the differences between data configurations.

Supports working with two files of different formats: json, yaml.
Works with flat and tree data structures.
Has various output formats: stylish, plain, json

## Installation

### 1. Clone repository:
    git@github.com:mashaanov/frontend-project-46.git
### 2. Install dependencies:
    npm install
### 3. Install local packages:
    sudo npm link
    
## Usage

### to see docs:
    gendiff -h  

### to generate differences with default stylish output:
    gendiff <path to file1> <path to file2>

### to plain output:
    gendiff --format plain <path to file1> <path to file2> 

### to json output:
    gendiff -f json <path to file1> <path to file2> 
<a href="https://asciinema.org/a/d7S5ZP6upxQm3JO42utsAVY6t" target="_blank"><img src="https://asciinema.org/a/d7S5ZP6upxQm3JO42utsAVY6t.svg" /></a>
