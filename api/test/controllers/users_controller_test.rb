require "test_helper"

class UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user, @token = sign_in_as(users(:lazaro_nixon))
  end

  def default_headers
    { "Authorization" => "Bearer #{@token}" }
  end

  test "shoould return user detail" do
    get user_url(1), headers: default_headers
    assert_equal @user.email, response.parsed_body["email"]
  end
end
