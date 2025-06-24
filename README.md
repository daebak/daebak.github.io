# Blog Creation Statistics Viewer

This project provides a simple way to view statistics about blog creation.

## How to Use

1.  **Ensure you have Python installed.**
2.  **Run the statistics generator script:**
    ```bash
    python statistics_generator.py
    ```
    This script will read data from `created_blogs.csv` (make sure this file exists and is in the correct format) and generate an HTML file named `statistics.html`.
3.  **Open `statistics.html` in your web browser:**
    Simply double-click the `statistics.html` file, or open it using your browser's "Open File" option.

## Files

*   `created_blogs.csv`: Contains the raw data of created blogs.
    *   `blog_id`: Unique identifier for the blog.
    *   `creation_date`: Date the blog was created (YYYY-MM-DD).
    *   `user_id`: Identifier for the user who created the blog.
*   `statistics_generator.py`: Python script that processes `created_blogs.csv` and generates `statistics.html`.
*   `statistics.html`: The web page displaying the blog creation statistics.

## Customization

*   To use your own data, replace or modify `created_blogs.csv` with your actual blog creation records. Ensure the columns `blog_id`, `creation_date`, and `user_id` are present.
*   The Python script `statistics_generator.py` can be modified to calculate and display different types of statistics.
