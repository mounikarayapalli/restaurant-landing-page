# Monica's YUMMY - Dine Divine

A premium, modern, and highly interactive restaurant showcase and table reservation web application built using HTML5, CSS3, JavaScript, Bootstrap 4, and Font Awesome. This project features state-of-the-art page load performance optimizations, responsive animations, and an interactive floor-plan booking system.

---

## 🌟 Features

### 1. High-Performance Asset Delivery
* **94.2% Image Optimization**: Programmatically optimized all images in the project directory, reducing total asset payload from **~61 MB down to 3.56 MB** with zero noticeable loss in quality.
* **Native Lazy Loading**: Configured `loading="lazy"` on all image nodes located below the initial fold to optimize browser loading priority.
* **Consolidated Requests**: Unified Google Fonts stylesheet links into a single bundled network request, minimizing TCP handshakes and rendering block times.

### 2. Glassmorphic Navigation (Fixed Navbar)
* Sleek, sticky-top navbar that remains visible across all sections.
* Implemented premium **blur backdrop filters** and box-shadow styling.
* Navigation links feature modern underline sliding hover animations.
* Setup scroll-padding-top offsets globally for seamless viewport transitions to page anchors.

### 3. Interactive About Us Tab Panel
* Clean interactive tabs (*Our History*, *Our Philosophy*, and *Atmosphere & Design*) allowing users to switch section descriptions seamlessly with fade-in animations.

### 4. Color-Coded Responsive Menu Grid
* 100% responsive Bootstrap 4 grid featuring 12 popular dishes (with 4 new additions).
* Dish cards feature custom category classes (`.card-special`, `.card-veggie`, `.card-classic`, `.card-sweet`) that dynamically adjust accent borders, tag badges, and elevation scale lifts on hover.
* Integrated pricing badges and food dietary tags.

### 5. Advanced Events Slideshow
* Sleek, high-resolution slideshow showing 5 events, including custom AI-generated assets (`wedding_event.jpg` and `corporate_event.jpg`).
* Equipped with manual prev/next navigation controls, pagination indicator dots, and automatic sliding intervals.

### 6. Interactive Chef Cards
* Profiling cards displaying chef names, titles, and bios.
* Features a sliding overlay containing social media links that slides up smoothly when the user hovers over the chef's picture.

### 7. Responsive Lightbox Gallery with Filtering
* Built using a fluid CSS Grid (`grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))`).
* Interactive filtering buttons to toggle visible items dynamically between *All*, *Starters*, *Mains*, and *Desserts*.
* Gallery cards feature custom caption overlays and a search zoom icon on hover.
* Clicking any image opens a custom JavaScript Modal Lightbox showing details of the dish on a split-screen layout.

### 8. Interactive Table Booking System
* Form collects Guest Name, Contact Number, Guest Email, Party Size (Guests), Date/Time, and Selected Table.
* **Floor Plan Selection Modal**: Opens a map showing *Ground Floor* and *First Floor* seating grids.
  * Displays tables with color statuses: **Green (Available)**, **Red (Booked)**, and **Gold (Selected)**.
  * Clicking an available table populates the booking details.
* **Booking Tokens**: Generates a unique offline recognition token (`YM-XXXX`) for reservation check-ins.
* **Redirection Ticket**: Redirection parses the reservation parameters to render a premium, print-friendly confirmation ticket.
* **Automated Client Emailing**: Launches the user's default email client, pre-filling a drafted booking confirmation receipt addressed to the email provided in the form.

---

## 🛠️ Tech Stack & Libraries

* **Core Structure**: HTML5
* **Styling**: CSS3 & Bootstrap 4.6.2 (Responsive layouts & grid system)
* **Fonts & Icons**: Google Fonts (Concert One, Crimson Text, Crimson Pro, Tapestry, Allison, Sacramento) & Font Awesome 4.5.0
* **Client Logic**: Javascript (ES6) & jQuery 3.6.0
* **Asset Optimization**: .NET System.Drawing & Python Pillow image compression pipelines
* **Local Hosting**: Python `http.server`

---

## 🚀 How to Run the Project Locally

1. Clone this repository to your local machine:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd "yummy food project"
   ```
3. Start a local HTTP server (using Python 3):
   ```bash
   python -m http.server 8088
   ```
4. Open your web browser and navigate to:
   ```url
   http://localhost:8088/home_page.html
   ```
