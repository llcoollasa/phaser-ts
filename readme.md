![phaser3-ts](https://i.ibb.co/ygpwcvg/New-Project-64.png)

# Phaser 3 + TypeScript  

![License](https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png)


  

Start development server:

```
npm run start
```

To create a production build:

```
npm run build
```
 

## Project Structure

```
    .
    ├── dist
    ├── node_modules
    ├── public
    ├── src
    │   ├── scenes
    │   │   ├── Scene1.ts
    │   ├── index.html
    │   ├── main.ts
    ├── package.json
```
   
## Static Assets

Static assets are placed in the `public` folder. 

Example `public` structure:

```
    public
    ├── images
    │   ├── img.png
    ├── music
    │   ├── song.ogg
```

They can then be loaded by Phaser with 

`this.image.load('my-image', 'images/my-image.png')`
  

## License


<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.
