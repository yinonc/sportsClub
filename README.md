# Sports Club

Still don't write our goal name - let's keep it in secret.
### How to run app:
Make sure you're using node > 12 (for expo cli).  
Run:
```
$ nvm use
```
It's being taken from `.nvmrc` file (you can install project version by `nvm install 12.14`).
##### First run:
Install expo globally:
```
$ npm install -g expo-cli
```

##### Run:
```
$ npm install
$ npm start
```


### Using icons:
We're working with open source library for icons.
Usage:
```javascript
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

<MaterialCommunityIcons
    name="Home"
    size={size}
    color={color}
/>
```
All list of icons detailed here: https://github.com/oblador/react-native-vector-icons/blob/master/glyphmaps/MaterialCommunityIcons.json
