import postcss from 'postcss';

export default postcss.plugin('anticss', () => {
  return (root, result) => {
    result.root = postcss.root();
  };
});
