class NodeTag < ApplicationRecord
  belongs_to :node
  belongs_to :tag
end