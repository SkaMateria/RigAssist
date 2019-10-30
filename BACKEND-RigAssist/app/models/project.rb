class Project < ApplicationRecord
    belongs_to :users
    belongs_to :animations
end
