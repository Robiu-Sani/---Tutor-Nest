import PropTypes from "prop-types";

export default function DeleteService({
  CallDelete,
  HandleDeleteCall,
  DeleteService,
}) {
  return (
    <div className="fixed top-0 left-0 min-w-full z-[1000] min-h-screen bg-[rgba(0, 0, 0, 0.342)] flex justify-center items-center">
      <div className="w-[250px] p-5 rounded-md flex flex-col gap-1 bg-gray-200">
        <b className="my-4 text-center">Are you want delete?</b>
        <div className="w-full my-2 flex justify-around items-center">
          <button
            onClick={() => {
              DeleteService(), HandleDeleteCall(!CallDelete);
            }}
            className="btn px-8 bg-red-400"
          >
            Yes
          </button>
          <button
            onClick={() => HandleDeleteCall(!CallDelete)}
            className="btn px-8"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

DeleteService.propTypes = {
  CallDelete: PropTypes.object,
  HandleDeleteCall: PropTypes.object,
  DeleteService: PropTypes.object,
};
