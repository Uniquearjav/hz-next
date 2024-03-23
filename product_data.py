import bs4
import requests
asin = input("Enter the ASIN: ")
url = 'https://www.amazon.in/s?
print(url)
res = requests.get(url)
print(res)
# res.raise_for_status()
# soup = bs4.BeautifulSoup(res.text, 'html.parser')
