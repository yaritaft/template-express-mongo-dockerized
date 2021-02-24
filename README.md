# How to run the whole app
```bash
chmod 711 up.sh
./up.sh
```
# Warning
DB and Collection if it does not exists by accessing it and inserting data you are creating automatically.
# Warning
If you have some other service on port: 3000 or 27017 you will have issues because with Node or Mongo respectively.

# How to run app without docker
Remove api part from docker compose and run up.sh script. Then type this:

```typescript
npx ts-node app.ts or npx nodemon app.ts
```

# How to build the app (OPTIONAL because ts node already does that)
```typescript
npx tsc
```