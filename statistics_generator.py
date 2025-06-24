import csv
from collections import Counter

def generate_statistics(csv_filepath):
    """
    Reads blog creation data from a CSV file and generates statistics.

    Args:
        csv_filepath (str): The path to the CSV file.

    Returns:
        dict: A dictionary containing statistics.
              Keys: 'total_blogs', 'blogs_per_day', 'blogs_per_user'
    """
    dates = []
    users = []
    total_blogs = 0

    with open(csv_filepath, mode='r', newline='') as file:
        reader = csv.DictReader(file)
        for row in reader:
            total_blogs += 1
            dates.append(row['creation_date'])
            users.append(row['user_id'])

    blogs_per_day = Counter(dates)
    blogs_per_user = Counter(users)

    return {
        'total_blogs': total_blogs,
        'blogs_per_day': dict(blogs_per_day),
        'blogs_per_user': dict(blogs_per_user)
    }

if __name__ == '__main__':
    stats = generate_statistics('created_blogs.csv')
    print(f"Total blogs created: {stats['total_blogs']}")
    print("\nBlogs created per day:")
    for date, count in stats['blogs_per_day'].items():
        print(f"- {date}: {count}")
    print("\nBlogs created per user:")
    for user, count in stats['blogs_per_user'].items():
        print(f"- {user}: {count}")

    # Prepare data for HTML
    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Creation Statistics</title>
    <style>
        body {{ font-family: sans-serif; margin: 20px; }}
        h1 {{ color: #333; }}
        h2 {{ color: #555; }}
        table {{ border-collapse: collapse; width: 50%; margin-bottom: 20px; }}
        th, td {{ border: 1px solid #ddd; padding: 8px; text-align: left; }}
        th {{ background-color: #f2f2f2; }}
    </style>
</head>
<body>
    <h1>Blog Creation Statistics</h1>

    <h2>Summary</h2>
    <p><strong>Total Blogs Created:</strong> {stats['total_blogs']}</p>

    <h2>Blogs Created Per Day</h2>
    <table>
        <tr>
            <th>Date</th>
            <th>Number of Blogs</th>
        </tr>
"""
    for date, count in sorted(stats['blogs_per_day'].items()):
        html_content += f"        <tr><td>{date}</td><td>{count}</td></tr>\n"
    html_content += """\
    </table>

    <h2>Blogs Created Per User</h2>
    <table>
        <tr>
            <th>User ID</th>
            <th>Number of Blogs</th>
        </tr>
"""
    for user, count in sorted(stats['blogs_per_user'].items(), key=lambda item: item[1], reverse=True):
        html_content += f"        <tr><td>{user}</td><td>{count}</td></tr>\n"
    html_content += """\
    </table>

</body>
</html>
"""
    with open('statistics.html', 'w') as f:
        f.write(html_content)
    print("\nSuccessfully generated statistics.html")
