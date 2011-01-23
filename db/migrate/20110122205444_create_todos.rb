class CreateTodos < ActiveRecord::Migration
  def self.up
    create_table :todos do |t|
      t.string :description
      t.references :list
    end
  end

  def self.down
    drop_table :todos
  end
end
