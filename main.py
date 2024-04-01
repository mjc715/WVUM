from bs4 import BeautifulSoup
import requests
from requests_oauthlib import OAuth1Session
import os
import keys
import tweepy
import time

def getLiveSong():
    try:
        # Gets html code from webpage we want
        response = requests.get("https://onlineradiobox.com/us/wvum/playlist/?cs=us.wvum")
        html = response.text
        
        # Converts html to something usable by bs4
        soup = BeautifulSoup(html, "html.parser")
        
        # Scraping webpage for active song and returns it
        liveSong = soup.find("tr", attrs={"class":"active"}).find("a", attrs={"class":"ajax"}).get_text()
        return liveSong
    except:
        print("Could not fetch live song")
        return None


def tweet(message: str):
    try:
        # If this part is not working, may need to update keys / look at any changes to Twitter API
        client = tweepy.Client(keys.BEARER_TOKEN, keys.API_KEY, keys.API_SECRET, keys.ACCESS_TOKEN, keys.ACCESS_SECRET)
        auth = tweepy.OAuthHandler(keys.API_KEY, keys.API_SECRET, keys.ACCESS_TOKEN, keys.ACCESS_SECRET)
        api = tweepy.API(auth)
        client.create_tweet(text=message)
        
    except Exception as error:
        print("Error in tweet()") 
        print(error)
    

while __name__ == '__main__':
    song = getLiveSong()
    tweetMsg = "Currently playing: " + str(song)
    print(tweetMsg)
    tweet(tweetMsg)
    time.sleep(300) # Loops every 300s (5 min)
   