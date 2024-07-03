import { Button, Card, Label, TextInput } from "flowbite-react";
import React from "react";

function ResetPassword() {
  return (
    <div className="p-8 flex items-center justify-center">
      <Card className="w-[400px]">
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="newPassword" value="New password" />
            </div>
            <TextInput
              id="newPassword"
              type="password"
              placeholder="your new password"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="confirmNewPassword"
                value="Confirm new password"
              />
            </div>
            <TextInput
              id="confirmNewPassword"
              type="password"
              placeholder="confirm password"
              required
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
}

export default ResetPassword;
