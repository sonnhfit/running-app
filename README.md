Một landding page của ưng dụng chạy bộ tên là Son Running 

với nội dung 


The best of Strava. Built for your goals.
Say hello to smarter training, constant improvement and endless exploring.
Dive into your Subscription
Train
Explore
Compete
Everything you need, all in one place
Improve faster with smarter training
Each goal you set and every effort you track helps you to understand your performance and reach new personal bests.

New
Predict your finish times
See your training pay off with personalized predictions for your next 5K, 10K, half marathon and marathon.

New
Compare your progress
Get the best out of yourself. Easily track how your performance has shifted over time.

Get AI-powered insights
Train smarter with Athlete Intelligence, AI that turns metrics into meaningful insights.
Start training
Explore with confidence
Find new Routes and take off without second-guessing for better planning, easier exploring and bigger adventures.

New
Get Routes made for you
Our upgraded tech creates Routes based on millions of Strava activities and personalizes them to you.

New
Plan smarter with new layers
Real-time updated 3D maps help you spot steep climbs, snow risks and shifting slopes before you go.

New
Add a stop or destination
Include a Point of Interest, like a water fountain or viewpoint, in your Route. We’ll map the best way there.
Start exploring
Bring out your best with challenges
Chase personal bests, compete with friends and family, or earn your spot on the world’s biggest team.

Climb the leaderboards
Chase the fastest time on your local run or ride Segments to see how you compare to others.

Challenge your friends
Turn motivation into a group activity. Create a challenge and invite your friends.

Become legendary
Run or ride a Segment the most in 90 days and claim Local Legend status.
Start competing
And by everything, we mean everything
Feature	Free	Subscription
Record your activities		
Connect with community		
Set and track custom Goals	không	
Train smarter with personalized insights	không	
View your full training history	không	
Find, build and save Routes	không	
See your progress and fitness over time	không	
Join and create Challenges with friends	không	
Compete on Segment Leaderboards	không	

Every 19 seconds, a Subscriber hits their goal.

Welcome to the club.
Logo Strava
© 2026 Strava, Inc.

Bảo lưu mọi quyền

Chính sách quyền riêng tư

Không được chia sẻ thông tin cá nhân của tôi

Menu
Tính năng
Gói đăng ký
Gói gia đình
Đối tác gói đăng ký
Ưu đãi giảm giá cho học sinh, sinh viên
Ưu đãi giảm giá cho giáo viên, quân nhân và nhân viên y tế (chỉ áp dụng tại Hoa Kỳ)
Tặng quà
Lộ trình
Giới thiệu
Stories
Hỗ trợ
Nghề nghiệp
Báo chí
Doanh nghiệp
Trung tâm đối tác
Theo dõi
Facebook
Instagram
Twitter
YouTube
LinkedIn



---

## Form đăng ký nhận thông tin (Newsletter)

Form đăng ký được thêm vào phía dưới phần "Sẵn sàng bắt đầu hành trình của bạn?". Khi người dùng điền tên và email rồi nhấn **Đăng ký**, dữ liệu sẽ được ghi thêm một dòng vào Google Trang tính.

### Cách kết nối với Google Trang tính

Vì Google Sheets API yêu cầu xác thực khi ghi dữ liệu, bạn cần triển khai một **Google Apps Script Web App** làm trung gian. Thực hiện theo các bước sau:

1. Truy cập [https://script.google.com](https://script.google.com) và tạo dự án mới.
2. Sao chép toàn bộ nội dung file **`apps-script.gs`** vào trình chỉnh sửa script.
3. Nhấn **Deploy → New deployment → Web app**.
4. Thiết lập:
   - **Execute as:** Me (tài khoản Google của bạn)
   - **Who has access:** Anyone
5. Nhấn **Deploy** và cấp quyền truy cập khi được yêu cầu.
6. Sao chép **Web App URL** được cung cấp.
7. Mở `index.html`, tìm dòng:
   ```js
   var NEWSLETTER_ENDPOINT = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
   ```
   Thay toàn bộ chuỗi URL bằng Web App URL vừa sao chép.

### Cấu trúc dữ liệu trong Google Trang tính

Mỗi lần đăng ký thành công sẽ thêm một hàng mới với 3 cột:

| Timestamp | Tên | Email |
|-----------|-----|-------|
| (tự động) | Nguyễn Văn A | example@email.com |

Bạn có thể thêm dòng tiêu đề vào hàng đầu của sheet theo cấu trúc trên.
