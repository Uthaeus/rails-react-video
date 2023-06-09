9.times do |project|
    Project.create!(
        title: "Project #{project}",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        video_url: "https://example.com",
        thumbnail: "https://placehold.it/350x250"
    )
end

puts "9 projects created"

1.times do |user|
    User.create!(
        email: "test@test.com",
        password: "foobar",
        password_confirmation: "foobar",
        role: "site_admin"
    )
end

puts "1 user created"
