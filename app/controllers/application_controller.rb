class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_filter \
    :expose_user_to_javascript,
    :expose_config_to_javascript

  after_filter :set_csrf_cookie_for_ng

  helper_method :current_user

  def expose_user_to_javascript
    gon.jbuilder template: 'app/views/api/users/show.json.jbuilder' if current_user
  end

  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  def expose_config_to_javascript
    config = {
      appUrl: APP_CONFIG[:app_url]
    }
    gon.config = config
  end

  protected

  def verified_request?
    super || form_authenticity_token == request.headers['X-XSRF-TOKEN']
  end

  private

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
end
