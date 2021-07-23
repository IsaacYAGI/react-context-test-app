const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@assets' : 'public/assets',
    '@components': 'src/components',
    '@contexts' : 'src/contexts',
    '@interfaces' : 'src/interfaces',
    '@services' : 'src/services',
    '@utils' : 'src/utils'
  })(config)

  return config
}