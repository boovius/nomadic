def load_yaml(config)
  file = File.join(Rails.root, 'config', config)
  return nil unless File.exists?(file)
  YAML.load_file(file)[Rails.env]
end

app_config = load_yaml('application.yml')

APP_CONFIG = HashWithIndifferentAccess.new app_config
