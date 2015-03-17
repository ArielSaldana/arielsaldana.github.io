---

title: Palringo python bot
tags: [python,python 3.4,palringo,bot]
category: blog
layout: post

---

This is a Palringo bot developed in python by me. It's completely open source and easy to __build__ upon.
The bot uses __Python 3.4+__

In order to log on you must enter your __credentials__ on main.py. line:

```python
##LOGON INFORMATION HERE ===================================
parser.sendLogon('email@domain.ltd')
passwd = "password"
## ---------------------------------------------------------
```
In order to alter the bot's functionality you must change the code in main.py. There are a few functions that handle data, such as:


```python
#getters

parser.getCommand()   #gets the packet commend
parser.getSourceID()  #returns the userID of the person who sent the message(packet)
parser.getTargetID()  #returns the group the message(packet) was sent in
parser.getPayload()   #returns the packet payload. whether it be a message or any other information

#handy functions

parser.sendGroupMessage('groupID', 'message')
parser.sendPrivateMessage('userID', 'message')

```


I've included in the source code a few examples on what the bot can do based on packets/messages sent to it. Example:

```python
#if a group message comes in
if ( parser.getCommand() == 'GroupMESG'):
  ## if someone talks
    if ( parser.getSourceID() != 0 ):
        parser.sendGroupMessage(parser.getTargetID(), "shut up")
```

As you can see, you can change the __bot__ to behave how you want, which is pretty cool, the only problem is that this is not yet complete

The bot and source-code are free for download from github under an MIT license. [palring-python-bot-3.4](https://github.com/ArielSaldana/palringo-python-bot).

Connect with Ariel on [Twitter](https://twitter.com/yerariel) & <a rel="author" href="https://plus.google.com/+ArielSal"> Google+ </a>
