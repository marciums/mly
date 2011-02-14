class List < ActiveRecord::Base
  has_many :todos
  default_scope :order => "ID DESC" # TODO: user-specified ordering?
end
