export const checkExtensionFile = (fileName) => {
  let regexImage = /\.(jpe?g|png)$/i;

  return regexImage.test(fileName);
};
