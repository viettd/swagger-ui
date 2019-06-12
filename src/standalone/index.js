import StandaloneLayout from "./layout"
//import TopbarPlugin from "plugins/topbar"
import ConfigsPlugin from "corePlugins/configs"

// the Standalone preset

const HideInfoUrlPartsPlugin = () => {
  return {
    wrapComponents: {
      InfoUrl: () => () => null,
      InfoBasePath: () => () => null, // this hides the `Base Url` part too, if you want that
    }
  }
}

let preset = [
  //TopbarPlugin,
  ConfigsPlugin,
  HideInfoUrlPartsPlugin,
  () => {
    return {
      components: { StandaloneLayout }
    }
  }
]

module.exports = preset
