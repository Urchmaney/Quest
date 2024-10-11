class Node < ApplicationRecord
  belongs_to :owner, class_name: 'User'
  has_many :members
  has_many :users, through: :members

  has_many :node_tags
  has_many :tags, through: :node_tags

  validates :title, length: { in: 1..100 },  allow_nil: false
end