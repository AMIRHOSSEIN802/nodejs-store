const AppMessages = {
    RouteNotFound: "Page Not found :(",
    Liked: "liked successfully",
    LikeRemove: "like removed successfully",
    DisLiked: "dislike successfully",
    DisLikedRemove: "dislike remove successfully",
    BookmarkRemove: "bookmark remove successfully",
    Bookmark: "bookmarked successfully",
}
const commentMessage ={
    NotFound : "can not find comment",
    ReplyError : "can not reply this comment",
    Created: "comment created successfully",
    Delete: "comment removed successfully",
    AnswerFailed: "send answer failed",
    AnswerCreated: "answer send successfully",
}
const paymentMessage ={
    ParametersError : "wrong parameters",
    Basket : "user basket is empty",
    PaymentDetailsNotFound : "cant find any payment details",
    NotFound : "can not find pending transactions",
    Verified : "transaction is already verified",
    Success: "Your payment has been successfully completed",
    Failed: "Your payment has been failed. amount will return to your account within 72 hours",
}

const ValidationMessage = {
    Email:"email format is invalid please use another email",
    ConfirmPassword: "password and confirm password values must be same",
    PasswordLength: "password can be more than 8 and less than 64",
    PasswordWeak: "password must contain uppercase numbers and symbols (A-a-(0-9) #@..)",
    CodeLength: "code must be 5 char",
    CodeFormat: "invalid code format (accept numbers)",
    InvalidPhone: "please enter valid phone number",
    TypeError: "property type is invalid",
}
const UserMessages = {
    AlreadyExists: "this username is already exists",
    Notfound: "can not find any user",
    NotExpiresCode: "Otp code is still alive",
    CodeExpires: "Otp code expires",
    OtpNotFound: "otp code expired",
    InvalidCode: "Wrong Code!!",
    InvalidToken: "invalid account please Login",
    Refresh: "Tokens refreshed was SuccessFull",
    RoleError: "you do not have required permission to access",
    InvalidRefreshToken: "refresh token is invalid",
    Update: "profile updated",
    UpdateFailed: "profile update failed",
}
const CategoryMessages ={
    NotFound : "can not find category",
    Created: "category created successfully",
    Delete: "category removed successfully",
    Update: "category update successfully",
}
const BlogMessages ={
    NotFound : "can not find blog",
    Created: "blog created successfully",
    Delete: "blog removed successfully",
    RemoveFailed: "blog removed failed (not exists)",
    Update: "blog update successfully",
    UpdateFailed: "blog update failed",
    ImageFormat: "image format is invalid",
    AuthorNotFound: "author not found"
}
const ProductMessages ={
    NotFound : "can not find product",
    Created: "product created successfully",
    Delete: "product removed successfully",
    RemoveFailed: "product removed failed (not exists)",
    Update: "product update successfully",
    UpdateFailed: "product update failed",
    RequiredFiled: "is required for physical product",
    ColorFormat: "just (HEX) color format is acceptable",
    AddToBasket: "product successfully add to basket",
    RemoveFromBasket: "product successfully removed from basket",
    RemoveOneFromBasket: "one of the product removed from basket"
}
const CourseMessages ={
    NotFound : "can not find Course",
    Created: "Course created successfully",
    CreatedFailed: "can not create Course",
    Delete: "Course removed successfully",
    RemoveFailed: "Course removed failed (not exists)",
    Update: "Course update successfully",
    UpdateFailed: "Course update failed",
    AddToBasket: "course successfully add to basket",
    RemoveFromBasket: "course successfully removed from basket",
    RemoveOneFromBasket: "one of the courses removed from basket",
    AlreadyExists: "this course is already exists in your basket"
}
const ChapterMessages ={
    NotFound : "can not find any Chapter",
    Created: "Chapter add successfully",
    CreatedFailed: "can not add Chapter",
    Delete: "Chapter removed successfully",
    DeleteFailed: "failed to remove chapter",
    Update: "Chapter update successfully",
    UpdateFailed: "Chapter update failed",
}
const EpisodeMessages ={
    NotFound : "can not find any episode",
    Created: "episode add successfully",
    CreatedFailed: "can not add episode",
    Delete: "episode removed successfully",
    DeleteFailed: "failed to remove episode",
    RemoveFailed: "episode removed failed (not exists)",
    Update: "episode update successfully",
    UpdateFailed: "episode update failed",
    VideoFormat: "video format is invalid"
}
const ValidationMessages = {
    AuthorFormat: "author not found",
    CategoryFormat: "category not found",
    Length: "invalid Length",
    Format: "Invalid input format",
    Enum: "input value should chose from suggested list"
}
const RoleMessages ={
    NotFound : "can not find role",
    Created: "role created successfully",
    CreatedFailed: "we have error with creating role",
    Delete: "role removed successfully",
    RemoveFailed: "role removed failed (not exists)",
    Update: "role update successfully",
    UpdateFailed: "role update failed",
    AlreadyExists: "role with this title is already exists",
}
const PermissionMessage ={
    NotFound : "can not find Permission",
    Created: "Permission created successfully",
    CreatedFailed: "we have error with creating Permission",
    Delete: "Permission removed successfully",
    DeleteFailed: "Permission removed failed (not exists)",
    Update: "Permission update successfully",
    UpdateFailed: "Permission update failed",
    AlreadyExists: "Permission with this title is already exists",
}
const SupportMessages ={
    NotFound: "property not found",
    CreatedNamespace: "Namespace created successfully",
    CreatedRoom: "Room created successfully",
    Delete: "role removed successfully",
    RemoveFailed: "role removed failed (not exists)",
    Update: "role update successfully",
    UpdateFailed: "role update failed",
    AlreadyExists: "this row is already exists in db",
}
module.exports = {
    AppMessages,
    ValidationMessage,
    UserMessages,
    CategoryMessages,
    BlogMessages,
    ValidationMessages,
    ProductMessages,
    CourseMessages,
    ChapterMessages,
    EpisodeMessages,
    RoleMessages,
    PermissionMessage,
    commentMessage,
    paymentMessage,
    SupportMessages
}