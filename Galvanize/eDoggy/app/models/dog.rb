class Dog < ActiveRecord::Base
  validates :name, presence: true
  validates :age, presence: true
  validates :weight, presence: true
  validates :aggression, presence: true

  belongs_to :user
end
