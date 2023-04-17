class Change < ActiveRecord::Migration[7.0]
  def change
    rename_column :projects, :thumbnail_url, :thumbnail
  end
end
