Tom Nevat — One Page Landing Site + Password Catalog

איך מעלים לאתר:
1. מעלים את כל הקבצים והתיקיות שבתיקייה הזו ל-repository הקיים בגיטהאב.
2. עושים Commit changes.
3. מחכים כמה דקות ומרעננים את האתר עם Ctrl + F5.

איך מחליפים תמונות בגלריה:
1. מעלים תמונות לתיקייה images/gallery
2. עורכים את הקובץ js/content.js
3. משנים או מוסיפים שורות בתוך gallery

הגלריה כרגע בלי רווחים בין התמונות.
אם את מעצבת מקבצי גלריה באינדיזיין, מומלץ לייצא כל מקבץ כ-JPEG רחב ולהעלות אותו כקובץ אחד.

קטלוג מלא עם סיסמה:
- כפתור Access the Full Catalog נמצא אחרי הגלריה.
- הסיסמה הזמנית בקובץ js/content.js היא:
  TomTomTomCatalog
- כדי לשנות סיסמה, ערכי את השורה:
  cataloguePassword: "TomTomTomCatalog"

איך מעלים את ה-PDF של הקטלוג:
1. העלי את ה-PDF לתיקייה catalog
2. השם המדויק צריך להיות:
   tom-nevat-full-catalog.pdf
3. אם תרצי שם אחר, עדכני גם את השורה ב-js/content.js:
   cataloguePdf: "catalog/tom-nevat-full-catalog.pdf"

חשוב:
GitHub Pages הוא אתר סטטי. הסיסמה כאן נותנת מחסום נוח ומקצועי למבקרים רגילים, אבל זו לא הגנה חזקה לחומר סודי במיוחד.


עדכון גלריה:
בתיקייה images/gallery יש עכשיו 6 קבצים בלבד בשם:
gallery-01.jpg
gallery-02.jpg
gallery-03.jpg
gallery-04.jpg
gallery-05.jpg
gallery-06.jpg

כשאת מייצאת את ששת מקבצי הגלריה מאינדיזיין, שמרי אותם בדיוק בשמות האלה והחליפי את הקבצים הקיימים. כך אין צורך לערוך קוד.
