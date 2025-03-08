# durak-card-game
Client-server app to play Durak with your friends

## How to start collaboration

1. Install **Git Bash** on your machine: https://git-scm.com/downloads/win

2. Open **Git Bash** terminal and create SSH keys pair to get read/write access to the repository. Follow on-screen instructions. SSH key MUST BE PASSWORD PROTECTED!

```
$ ssh-keygen -t ed25519 -C "your_email@example.com"
```

3. Open your PUBLIC key file with any text editor and copy all its contents.


4. Go to **GitHub settings** -> **SSH And GPG Settings tab**, and add public key contents (see screenshot below):
![ssh_key_github](https://github.com/user-attachments/assets/5d619e27-3a6e-48ac-9306-ec45351505eb)

5. Ask [@rzr707](https://github.com/rzr707) to add you as a Collaborator for the repository. Wait until it's done.

6. Start SSH agent: 

``` 
$ eval `ssh-agent -s`
```

7. Add your PRIVATE SSH key, enter your key's password afterwards and press Enter:

```
$ ssh-add /c/Users/me/my-private-key
```

8. Try to clone the repository, create and push an experimental branch onto remote:
  
```
$ git clone git@github.com:rzr707/durak-card-game.git

$ cd durak-card-game

$ git checkout -b private/my_experimental_branch

$ echo "hello world" > my_file.txt

$ git add my_file.txt

$ git commit -m "Add new file (experimental commit!)

$ git push --set-upstream origin private/my_experimental_branch
```


9. **Happy Coding!**
