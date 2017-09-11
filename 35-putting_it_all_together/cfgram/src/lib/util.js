export const photoToDataURL = (file) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader()
    reader.addEventListener('load', () => {
      resolve(reader.result)
    })
    reader.addEventListener('error', () => {
      reject(reader.error)
    })
    if(file)
      return reader.readAsDataURL(file)
    return reject(new Error('USAGE ERROR: requires file'))
  })
}

// from 
export const readCookie = (name) => {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

export const createCookie = (name,value,days) => {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

export const deleteCookie  = (name) => {
	createCookie(name,"",-1);
}

export const log = (...args) => 
  __DEBUG__ ? console.log(...args) : undefined

export const logError = (...args) => 
  __DEBUG__ ? console.error(...args) : undefined

export const renderIf = (test, component) => 
  test ? component : undefined

export const classToggler = (config) => 
  Object.keys(config).filter(key => config[key]).join(' ')

export const map = (list, ...args) => 
  Array.prototype.map.apply(list, args)

export const filter = (list, ...args) => 
  Array.prototype.filter.apply(list, args)

export const reduce = (list, ...args) => 
  Array.prototype.reduce.apply(list, args)


