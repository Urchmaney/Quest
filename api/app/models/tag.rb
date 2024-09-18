class Tag < ApplicationRecord
  enum :category, { default: 0, custom: 1 }

  belongs_to :user, optional: true
  has_many :node_tags
  has_many :nodes, through: :node_tags
end