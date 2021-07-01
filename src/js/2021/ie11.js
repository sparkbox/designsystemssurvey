const checkIE = () => {
  const isIE = !!window.MSInputMethodContext && !!document.documentMode;

  if (isIE) {  
    const evergreenStyles = document.getElementsByTagName('link').item('/css/2021.css');
    const ieStyles = document.createElement('link');
    ieStyles.setAttribute('rel', 'stylesheet');
    ieStyles.setAttribute('type', 'text/css');
    ieStyles.setAttribute('href', '/css/2021-ie.css');
    
    html.item(evergreenStyles).replaceChild(ieStyles);
  }
};

checkIE();
