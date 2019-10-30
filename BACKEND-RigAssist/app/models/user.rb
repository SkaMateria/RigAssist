class User < ApplicationRecord
    has_many :projects
    has_many :animations, through: :projects
end
