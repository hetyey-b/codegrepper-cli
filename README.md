# Code Grepper CLI
Command Line Interface for Code Grepper 
![example screenshot](https://raw.githubusercontent.com/hetyey-b/codegrepper-cli/main/readme/screenshot_1.jpg)

## Getting Started

### Prequisites
* npm
```
npm install npm@latest -g
```

### Installation
1) Clone the repository
```
git clone https://github.com/hetyey-b/codegrepper-cli.git
```
2) Install the module
```
cd ./codegrepper-cli
npm install -g
```
If you get an EACCES error, try running the command as an administrator:
```
sudo npm install -g
```

## Usage
```
codegrepper <query>
```
It will return the results for the query from Grepper. It prints in reverse order, (most upvoted at the bottom) so that if there are many/long answers, you see the best one first when scrolling.

## Roadmap
- [x] Basic functionality
  - [x] Displays answers
  - [x] Syntax highlight
- [ ] Support yanking answer after search
- [ ] Support opening the source of the question if it is given 
- [ ] Support loading the additional "Show More" answers

## Contact
Botond Hetyey - hetyey.botond@gmail.com

Project Link: [https://github.com/hetyey-b/codegrepper-cli/](https://github.com/hetyey-b/codegrepper-cli/)
