# Khong gian Van hoa Ho Chi Minh (Ban day du)

Du an website tinh da hoan thien theo huong de deploy nhanh, gom nhieu trang chuc nang.

## Cau truc

- `index.html`: trang chu va tong quan du an
- `tu-lieu.html`: tin tuc, video, audio, anh tu lieu
- `thu-vien.html`: thu vien sach dien tu
- `bao-tang-3d.html`: danh muc diem bao tang/di tich 3D
- `ke-hoach.html`: lo trinh va kien truc trien khai
- `lien-he.html`: nguon doi tac du lieu va luu y phap ly
- `style.css`: giao dien dung chung
- `script.js`: du lieu va logic render/loc tim kiem

## Tinh nang da co

- Dieu huong da trang day du
- Bo loc va tim kiem nhanh cho:
  - Nguon noi dung
  - Tu lieu
  - Sach
  - Bao tang 3D
- Chi so tong hop tren trang chu
- Danh muc du lieu tu cac nguon:
  - `https://hochiminh.vn/`
  - `https://hochiminh.vn/bao-tang-3d`
  - `https://stbook.vn/`
  - `https://thuviencoso.vn/BookStore.aspx?colid=26`
  - `https://sachweb.com/publish/nhungtamguongbinhdi_t5_id3430/nhungtamguongbinhdi_t5_id3430.aspx`

## Chay local

Mo truc tiep `index.html` bang trinh duyet, hoac chay server tinh:

```bash
python3 -m http.server 8080
```

Truy cap: `http://localhost:8080`

## Deploy nhanh

### Netlify
1. Dang nhap Netlify
2. Keo-tha thu muc du an vao trang deploy
3. Hoan tat

### Vercel
1. Tao project moi tu thu muc nay
2. Chon preset `Other`
3. Deploy

### GitHub Pages
1. Day source len GitHub
2. Vao `Settings -> Pages`
3. Chon branch de publish

## Mo rong tiep theo

- Ket noi API/RSS chinh thuc khi co tai lieu ky thuat
- Bo sung trang quan tri noi dung (CMS)
- Them thong ke truy cap va dashboard theo doi
