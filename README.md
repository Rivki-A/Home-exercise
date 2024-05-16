השימוש בתוכנת ניהול חברי קופ"ח:


בכל מסך קיימים למעלה קישורים למסכים השונים - למסך החברים ולמסך ה"סיכום קורונה".


מסך החברים:

![hmo1](./img/hmo1.PNG)

כעת אנו רואים את רשימת החברים - שם ותמונת פרופיל של כל חבר.

כדי לראות את פרטיו של חבר מסוים, נלחץ עליו:

![hmo1](./img/hmo4.PNG)

כדי לערוך / למחוק חבר מסוים נלחץ על האיקון המתאים בשורת החבר.

דף העריכה יראה כך:

 ![hmo1](./img/hmo3.PNG)

כדי להוסיף חבר חדש למערכת, נלחץ על אייקון ההוספה בצד שמאל של המסך, וזה הדף שנראה:

 
  ![hmo1](./img/hmo2.PNG)


בפרטי החבר שהצגנו לעיל, ניתן ללחוץ על כפתור Corona Details, ולראות את פרטי הקורונה שלו:

 ![hmo1](./img/hmo5.PNG)

כדי לערוך/למחוק חיסון מסוים נלחץ על האיקון המתאים בשורת החיסון.

עריכת החיסון תראה כך:

  ![hmo1](./img/hmo7.PNG)

אם מספר החיסונים לחבר אינו עולה על 4 נוכל לראות את איקון הוספת חיסון ולהוסיף כך:

  ![hmo1](./img/hmo6.PNG)

  

נעבור למסך סיכום קורונה ע"י לחיצה על הקישור Corona Summary:

 ![hmo1](./img/hmo8.PNG)


כעת אנו רואים גרף המייצג את מספר הימים בחודש, ועבור כל יום מציג את מס' החולים הפעילים באותו היום.


אם נגלול את הדף נוכל לראות סיכום של מס' החברים שאינם מחוסנים כלל:

 ![hmo1](./img/hmo9.PNG)

 
הערות:

בהוספת חבר, מוסיפים את פרטיו האישיים בלבד בלי קשר לפרטי החיסונים שלו. רק לאחר שהחבר נוסף בהצלחה, ניתן להוסיף/לערוך/למחוק את חיסוניו. 

בוצעו בדיקות תקינות לקלטים הנדרשים.






איך להריץ:

על מנת להקים את הפרויקט ראשית יש להריץ את השרת בתוכנת Visual Studio (לראות שה- Swagger נפתח),

ולאחר מכן להריץ את התוכנה ע"י פקודת ng s בשורת הפקודה(כאשר הניתוב הוא לתיקיית הפרויקט).



כדי להתקין את הDB במחשב ניתן לעשות זאת ע"י הרצת הפקודות הבאות בשרת:

יש לפתוח את Package Manager Console ולעמוד על פרוייקט Data.

יש להריץ: <Add-Migration <MigrationName

ואח"כ יש להריץ Update-Database

הDB התעדכן!



התוכנה נכתבה ב:  Angular | .NET.

