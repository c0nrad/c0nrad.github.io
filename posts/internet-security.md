Imagine that you're in a room of people. You need to communicate a message to someone you've never spoken to, and this person is on the other side of the room. Everyone in the room is watching and listening to what you do and say. Can you tell that someone something secret without everyone else knowing what it is?

It's a tricky problem, take a minute to think if it's possible. Then lets think about the internet.

Imagine that you're ordering something for the first time on amazon.com. There are hackers (and probably the government) listening to everything your computer says to amazon. How do you tell amazon your credit card number without everyone knowing?

### Pre-shared Key

If you could speak to this person before hand, you could agree on some sort of encryption protocol and password. For example you could tell the person before hand "just move each letter down by 3", so:

	"My password is helloworld" -> 
	"Pb sdvvzrug lv khoorzruog"

People might think you're crazy, but the message would be secure transfered (securely enough anyways).

But, when you go to a new website, you haven't agreed on a encryption protocol, or a password. How do we securly transmit our credit card?

### Asymetric Cryptography

What if Amazon gave you a box, and an unlocked lock. You could write down your credit card number, put it in the box, then lock the box, and send it back to Amazon.

Some smart mathemeticians found out it was possible to do something very similar with very large prime numbers.

Amazon gives out a lock (Public-Key), and we can encrypt our credit card information and send it back to them. Only they have the Key (Private-Key) needed to decrypt the message and get back the original message.

### Public Key Infastructure (PKI)

But what if some malicious person was only masqurading as amazon.com. They sat between you and amazon, and gave you their own box and unlocked lock. Is it possible to prove that this unlocked lock belongs to amazon, or some evil interceptor?

