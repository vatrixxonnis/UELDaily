import {render, WebView} from 'react-native-webview';

export default function NewsDetail({navigation, route}) {
    const { link } = route.params;
    console.log("Hello World");
  return <WebView source={{uri: link}} />;
}
