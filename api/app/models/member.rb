class Member < ApplicationRecord
    belongs_to :user
    belongs_to :node
    belongs_to :hackathon, foreign_key: 'node_id'
end