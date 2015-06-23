class User < ActiveRecord::Base
  has_secure_password
  has_many :cheeses

  def self.select_users
    all.map { |user| [user.name, user.id] }
  end
end
