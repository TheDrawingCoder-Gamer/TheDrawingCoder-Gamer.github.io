--- 
title: Amiitool
---
In rust I have written an amiibo generator. It takes an NTAG id, an amiibo id, the keys (legally obtainable with homebrew), 
and outputs a signed amiibo. This was split into two libraries and 1 cli app. I didn't like writing the core library - 
[amiitool-rs](https://github.com/TheDrawingCoder-Gamer/amiitool-rs) - as it has a _lot_ of cryptography. Cryptography is built such
that 1 mistake means the whole output is wrong, making it very frustrating to debug. My code was broken 
[because of a single byte not written.](https://github.com/TheDrawingCoder-Gamer/amiitool-rs/blob/master/src/lib.rs#L293)
[Amiigen](https://github.com/TheDrawingCoder-Gamer/amiigen) outputs an unsigned amiibo given an 
amiibo id. [Amiigen-CLI](https://github.com/TheDrawingCoder-Gamer/amiigen-cli/blob/master/src/main.rs) can do everything the original 
[amiitool](https://github.com/socram8888/amiitool) can do, but it can also generate a raw amiibo or a signed amiibo, given an amiibo id. 
I have used this to get all splatoon amiibo and legend of zelda amiibo, for the gear in those games.
