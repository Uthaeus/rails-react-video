class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :video_url
      t.string :thumbnail_url, default: "https://placehold.it/200x250"

      t.timestamps
    end
  end
end
