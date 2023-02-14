function Request(url) {
  return new Promise(async (resolve, reject) => {

    const response = await fetch(url);
    const result = await response.json();

    if (response.ok && response.status === 200) {
      resolve(result);
    } else {
      reject(result);
    }

  });
}

export const get = (url) => Request(url);