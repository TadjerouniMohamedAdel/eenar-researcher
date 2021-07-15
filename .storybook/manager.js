import {create } from '@storybook/theming/create'
import {addons} from '@storybook/addons'
const theme = create({
    base:'light',
    brandTitle:"Eenar",
    brandImage:"/images/logo-complete.png",
    appBg: 'white',
})

addons.setConfig({theme})